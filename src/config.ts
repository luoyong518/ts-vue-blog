const add0 = (num: number) => {
    return num < 10 ? '0' + num : num
}

export function formatDate(str: number) {
    let time = new Date(str);
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let day = time.getDate()
    let h = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    return year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(h) + ':' + add0(minute) + ':' + add0(second)
}