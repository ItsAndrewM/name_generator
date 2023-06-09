const Selector = ({ setChoice }) => {
    const handleChange = e => {
        e.preventDefault();
        // e.
    }
    return (
        <form>
            <label>Selector:</label>
            <select>
                <option>Any person, place or thing</option>
                <option>Animals</option>
                <option>Cool names</option>
            </select>
        </form>
    );
}

export default Selector;