export default function counter(state = 0, action) {
    switch (action.type) {
        //增加计数
        case 'INCREMENT':
            return state + 1
        //减少计数
        case 'DECREMENT':
            return state - 1
        //没有操作则直接返回state
        default:
            return state
    }
}