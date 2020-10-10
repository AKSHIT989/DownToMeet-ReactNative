import mongoose from 'mongoose'
export default ()=>{
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://admin:nRQFjxcEaT8XcMsh@cluster0.jlopg.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    mongoose.connection
        .once('open', () => console.log('Mongodb running'))
        .on('error', err => console.error(err))
}