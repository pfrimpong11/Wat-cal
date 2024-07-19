const fs = require('fs');
const parseString = require('xml2js').parseString;
const Reading = require('../models/Reading');

const parseAndSaveXML = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Failed to read file ${filePath}:`, err);
            return;
        }

        parseString(data, (err, result) => {
            if (err) {
                console.error(`Failed to parse XML data from file ${filePath}:`, err);
                return;
            }

            const slaveInfo = result.MBusData.SlaveInformation[0];
            const dataRecords = result.MBusData.DataRecord.map((record) => {
                return {
                    function: record.Function[0],
                    storageNumber: record.StorageNumber[0],
                    tariff: record.Tariff ? record.Tariff[0] : null,
                    device: record.Device ? record.Device[0] : null,
                    unit: record.Unit[0].trim(),
                    quantity: record.Quantity ? record.Quantity[0].trim() : null,
                    value: parseFloat(record.Value[0])
                };
            });

            const reading = new Reading({
                id: slaveInfo.Id[0],
                manufacturer: slaveInfo.Manufacturer[0],
                version: slaveInfo.Version[0],
                productName: slaveInfo.ProductName[0],
                medium: slaveInfo.Medium[0],
                accessNumber: slaveInfo.AccessNumber[0],
                status: slaveInfo.Status[0],
                signature: slaveInfo.Signature[0],
                dataRecords: dataRecords
            });

            reading.save()
                .then(() => console.log(`Data from ${filePath} saved successfully`))
                .catch(err => console.error(`Failed to save data from ${filePath}`, err));
        });
    });
};

const readMetersSequentially = (filePaths, interval, delayBetweenReadings) => {
    const processFilePaths = (index) => {
        if (index >= filePaths.length) {
            setTimeout(() => processFilePaths(0), interval - (filePaths.length * delayBetweenReadings));
            return;
        }

        parseAndSaveXML(filePaths[index]);
        setTimeout(() => processFilePaths(index + 1), delayBetweenReadings);
    };

    processFilePaths(0); // Start processing files
};

module.exports = {
    parseAndSaveXML,
    readMetersSequentially
};

