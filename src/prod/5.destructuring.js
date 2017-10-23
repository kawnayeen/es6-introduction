/**
 * Created by kawnayeen on 10/23/17.
 */
export function getFirst(values) {
    let [first, ...rest] = values;
    return first;
}

export function getFirstName({firstName}) {
    return firstName;
}

export function getMiddleName({middleName}) {
    return middleName;
}

export function getLastName({lastName}) {
    return lastName;
}

export function getDisplayName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}