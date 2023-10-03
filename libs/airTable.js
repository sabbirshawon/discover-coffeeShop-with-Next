const Airtable = require("airtable");
const { AIRTABLE_API_KEY, AIRTABLE_BASE } = process.env;

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);
const coffeeStoresTable = base("coffee-stores");

const getMinifiedRecord = (record) => ({
  recordId: record.id,
  ...record.fields,
});

const getMinifiedRecords = (records) => records.map(getMinifiedRecord);

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await coffeeStoresTable
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getMinifiedRecords(findCoffeeStoreRecords);
};

module.exports = { coffeeStoresTable, getMinifiedRecords, findRecordByFilter };
