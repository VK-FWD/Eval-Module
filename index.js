module.exports.startUp = (data) =>{
    data.commands.eval = async (message, args) => {
        const code = args.join(" ");
        
        try{
            await data.vk.sendMessage(message.peerId,
                     "✔ Результат: " + eval("()=>{"+code+"}")())
        }catch(e){
            await data.vk.sendMessage(message.peerId,
                     "❗ Произошла ошибка: "+e.message)
        }
    }
}