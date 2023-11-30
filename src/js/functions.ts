export function convertToIndustrialHours(timeString : String) {
    const [hours, minutes] = timeString.split(':').map(Number);

    const industrialHours = hours + minutes / 60;

    return industrialHours;
}

export function convertToTime(industrialHours : number) {
    const hours = Math.floor(industrialHours);
    const minutes = Math.round((industrialHours - hours) * 60);

    const formattedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;

    return `${hours}:${formattedMinutes}`;
}
