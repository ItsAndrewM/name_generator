import { nouns } from "../data/nouns";
import { animalNames } from "../data/animalNames"
import { teamNouns } from "../data/teamNouns";

const Selector = ({ setChoice }) => {
    const handleChange = e => {
        e.preventDefault();
        if (e.target.value === 'animalNames') {
            setChoice(animalNames);
        }
        else if (e.target.value === "teamNouns") {
            setChoice(teamNouns);
        }
        else {
            setChoice(nouns);
        }
    }
    return (
        <form onChange={handleChange}>
            <label>Selector:</label>
            <select>
                <option defaultValue={""}>Select from dropdown</option>
                <option value={"nouns"}>Any person, place or thing</option>
                <option value={"animalNames"}>Animals</option>
                <option value={"teamNouns"}>Cool names</option>
            </select>
        </form>
    );
}

export default Selector;