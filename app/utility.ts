function getInputValue(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
    /*if (inputElement === null) {
        throw Error(`Invalid elementID ${elementID} was passed`);
    }

    if (inputElement.value === "") {
        return undefined;
    } else {
        return inputElement.value;
    }*/
}

function logger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger }