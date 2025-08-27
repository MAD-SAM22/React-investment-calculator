
export default function UserInput({ handleChange, UserInputs }) {
    return (
        <section id="user-input">

            <div className="input-group">
                <p>
                    <label >Inital Investment </label>
                    <input
                        value={UserInputs.initialInvestment}
                        required
                        type="number"
                        onChange={(event) => handleChange("initialInvestment", event.target.value)}
                    />
                </p>
                <p>
                    <label >Annual Investment ($)</label>
                    <input
                        type="number"
                        required
                        value={UserInputs.annualInvestment}
                        onChange={(event) => handleChange("annualInvestment", event.target.value)}
                    />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label >Expected Interest (%, per year)</label>
                    <input
                        type="number"
                        required
                        value={UserInputs.expectedReturn}
                        onChange={(event) => handleChange("expectedReturn", event.target.value)}
                    />
                </p>

                <p>
                    <label >Investment Duration (years)</label>
                    <input
                        type="number"
                        required
                        value={UserInputs.duration}
                        onChange={(event) => handleChange("duration", event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}