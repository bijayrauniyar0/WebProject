function useState(initialValue) {
    let state = initialValue || null

    function setState(newValue) {
        state = newValue
    }
    function getState() {
        return state
    }
    return [getState, setState]
}

const [data, setData] = useState()

console.log(data())

let temp = {
    channel: "Loop Verse",
    followers: 182
}
setData(temp)

console.log(data())