const TODAY = 'Today';
const YESTERDAY = 'Yesterday';

export const getFormatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    if (currentYear === year && currentMonth === month) {
        if (currentDay === day) {
            return TODAY;
        }
        if (currentDay === (day + 1)) {
            return YESTERDAY;
        }
    }

    return ('0' + day).slice(-2) + '/' + ('0' + month).slice(-2) + '/' + year;
}
