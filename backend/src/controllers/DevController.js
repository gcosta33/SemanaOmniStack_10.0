const axios = require('axios');
const Dev = require('../models/Dev')

const parseArrayAsString = require('../utils/parseStringAsArray')
const objectIdIsValid = require('../utils/objectIdIsValid')

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const techsArray = parseArrayAsString(techs)

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            console.log(name, avatar_url, bio, github_username, techsArray);

        }
        return response.json(dev);
    },
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async update(request, response) {
        const { _id, name, avatar_url, bio, techs } = request.body;
    
        if(objectIdIsValid(_id)){
            const dev = await Dev.findOne({_id})
            if(dev){
                await Dev.findOneAndUpdate(
                    {_id},
                    {
                        $set:{
                            name:name?name:dev.name,
                            avatar_url:avatar_url?avatar_url:dev.avatar_url,
                            bio:bio?bio:dev.bio,
                            techs:techs?techs:dev.techs
                        }
                    },
                    {
                        returnNewDocument: true
                    }
                    )
                    response.send(200)
                }else{
                    return response.send(404)
                }
        }else {
            return response.send(404)
        }
    },
    async delete(request, response) {
        const { _id } = request.body;

        if(objectIdIsValid(_id)){
            const dev = await Dev.findOneAndDelete({_id})
            if(dev){
                return response.send(200)
            }else{
                return response.send(404)
            }
        }else{
            return response.send(404)
        }

    }
}