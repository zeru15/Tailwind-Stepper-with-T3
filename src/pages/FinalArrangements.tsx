const FinalArrangements = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title"> Final Arrangements </div>
            <p> Inform your loved ones of certain things that you’d like done at the time of your passing.
                Please note that this section cannot be made legally binding. </p>
            <div>
                <label> What are your wishes for your final resting place or arrangements?  </label>
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Cremation </label>
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Donate Body To Science </label>
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Ground Burial </label>
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Let Family Decide </label>
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Mausoleum Burial </label>
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Something Else </label>
            </div>
            <div>
                <div> Cremation Details </div>
                <label> What do you want done with your ashes? </label>
                <textarea

                placeholder=""
                value={formData.cremation}
                onChange={(e) => setFormData({ ...formData, cremation: e.target.value })}
            />
            </div>
            <div>
                <label> What kind of ceremony do you wish to have?   </label>
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> No Ceremony </label>
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Let My Family Decide </label>
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Funeral </label>
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Memorial </label>
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Funeral and Memorial </label>
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Something Else </label>
            </div>
            <div>
                <label> Do you have any special requests for your final resting place or your ceremony? </label>
                <p> For example, you may request to have certain songs played at your ceremony, 
                    ask for a tree to be planted where your ashes will be spread, 
                    or have people donate to an organization of your choice instead of sending flowers for the funeral. </p>
                <button> Yes </button>
                <button> No </button>
            </div>
            <br/>

            <button
                onClick={() => {
                    setPage(page + 1);
                }}>
                Next
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

export default FinalArrangements