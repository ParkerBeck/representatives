const partyColor = (party) => {
    switch(party.toLowerCase()) {
        case "republican": return "#FF0000";
        case "democrat":
        case "democratic":
            return "#0000FF";
        default: return "#000000";
    }
};

export default partyColor;