const idGenerator = () => {

    let idCounter = 4;
    let idValue;

    const getID = () => {

        idCounter++;
        idValue = `e${ idCounter }`;
        console.log('Generated: ', idValue);
        return idValue;

    };

    return {getID};
};

export default idGenerator;