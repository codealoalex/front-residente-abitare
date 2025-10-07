export const formatFecha = (fecha, delimitador='-') => {
    return fecha.slice(0, 10).split("-").reverse().join(delimitador);
}

export const formatId = (id) => {
    return `#${id.toString().padStart(5, '0') }`;
}

export const formatNombreTecnico = (nombre, paterno, materno) => {
    return `${nombre} ${paterno[0]}. ${materno[0]}.`
}
