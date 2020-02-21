const MongoClient = require('mongodb');
const assert = require('assert');

const url = 'mongodb://riotAdmin:supremeleader123@localhost:27017';

const dbName = 'riot';
const collectionName = 'apiKeys';
const getClient = async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  })
        .catch(err => { console.log(err); });

    return client;
}

const getKeys = async () => {
    const client = await getClient();

    try {
        const db = client.db(dbName);
        let collection = db.collection(collectionName);
        let res = await collection.find().toArray();
        return res
    } catch (err) {
        return err
    } finally {
        client.close();
    }

}

const setKey = async (from,key) => {
    const {username:name, id} = from;
    const client = await getClient();

    try {
        const db = client.db(dbName);
        let collection = db.collection(collectionName);
        await collection.updateOne({name}, {$set:{key,id}}, {upsert:true});
        return key;
    } catch (err) {
        return err
    } finally {
        client.close();
    }

}

const delKey = async(name) => {
    const client = await getClient();

    try {
        const db = client.db(dbName);
        let collection = db.collection(collectionName);
        let target = await collection.findOne({name});
        await collection.deleteOne({name});
        return target;
    } catch (err) {
        return err;
    } finally {
        client.close();
    }

}

module.exports = {
    getKeys,
    setKey,
    delKey
}