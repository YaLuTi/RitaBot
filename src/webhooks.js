// JavaScript source code
const {WebhookClient, MessageEmbed} = require('discord.js');

module.exports = {
    name : 'webhook',
    run : async(client, message, args) => {
    const wc = new WebhookClient('920579118876201011', 'UvOv6EsLsD8zPrNmpWbwrERTsj9nyFnKZ1rqcOuqceJNXCXrZZm0gjIOWEJaoZdKGyDw')
        const embed = new MessageEmbed()
            .setTitle("this is an embed").setColor('GREEN').setTimestamp().setDescription(args.join(" "))
    wc.send({
        username : message.author.tag,
        avatarURL : message.author.displayAvatarURL({dynamic : true}),
        embeds : [embed]
    })
    }
}