FROM mongo

COPY data.json /data.json
CMD mongoimport --host server_db --db menuDB --collection recipes --drop --type json --file /data.json --jsonArray