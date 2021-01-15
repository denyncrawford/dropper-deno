import Dropper from '../../src/mod.ts'

const dropper = new Dropper();

dropper.on('open', () => {
    console.log('connected');
    let i = 0;
    setInterval(() => {
        i++
        dropper.broadcast('hello', `hi from ${dropper.uuid} ${i}`)
    }, 10000)
})

dropper.on('hello', msg => {
    console.log(msg)
})