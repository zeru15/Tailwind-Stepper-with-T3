const Witnesses = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title"> Witnesses </div>
            <p> After you finish filling out your will, we will email you the steps to make it legally binding.
                One of those steps is to sign the printed document and have it witnessed by
                two people and notarized if you choose. </p>
            <div>
                <div> Would you like us to email you and your two potential witnesses to get the ball rolling? </div>
                <p> Optional but recommended. Witnesses should be over the age of 18 and not otherwise named in your will. </p>
                <label> Witness 1 Email </label>
                <input
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <label> Witness 2 Email </label>
                <input
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <label> Want to include a custom message? </label>
                <textarea

                    placeholder=""
                    value={formData.customMessage}
                    onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                />
            </div>
            <div>
                <div> Review </div>
                <p> Looks like you might have missed a question or two.
                    Click below to jump right to them (look out for the colored flags). </p>
                <button>
                    What did i miss?
                </button>
            </div>
            <br />

            <button
                onClick={() => {
                    alert("You've successfully submitted this form");
                }}>
                Submit
            </button>
            <br />
            <button
                onClick={() => {
                    setPage(page - 1);
                }}>
                Previous
            </button>

        </div>
    );
};

export default Witnesses;