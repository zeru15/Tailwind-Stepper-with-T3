const TheWill = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title"> The Will </div>
            <p>
                Designate guardians for your children,
                beneficiaries and bequests of your estate,
                and executors for your Last Will and Testament.
            </p>

            <div>
                <label> Do you have children under the age of 18? </label>
                <button> Yes </button>
                <button> No </button>
            </div>
            <div>
                <label> Do you want to include one or more bequests in your will?  </label>
                <button> Yes </button>
                <button> No </button>
            </div>
            <div>
                <div> EXECUTOR </div>
                <p> The executor is the person who is responsible to ensure that the wishes stated in your will are carried out.
                    Most people select their spouse, sibling or a trusted friend for this role.
                    When choosing your will's executor,
                    please keep in mind the many responsibilities of an executor and the requirements for being one. </p>
                <label> Legal name of your will's executor </label>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.fullName} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <input
                    type="text"
                    placeholder="MI"
                    value={formData.mi} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, mi: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <div>
                    <label> Is your relationship to this executor personal or professional? </label>
                    <p> By providing this information we can help you think of ways to get the conversation started
                        with them in the Messages section of your Fabric Will Kit. </p>
                    <button> Personal </button>
                    <button> Proffessional </button>
                </div>
                <div>
                    <label> Send this will to the executor? </label>
                    <p> Optional but recommended. It's a good idea to share your final wishes
                        with the person responsible for making them happen. </p>
                    <input
                        type="text"
                        placeholder="Email"
                        value={formData.email} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
            </div>
            <div>
                <label> Do you want to designate an alternate executor? </label>
                <p> An alternate executor would become the executor of your will in the event
                    that the primary person chosen is unwilling or unable to take on the role. </p>
                <button> Yes </button>
                <button> No </button>
            </div>
            <div>
                <label> Would you like to share a summary of your will with other trusted contacts? </label>
                <p> This could be a close family member or friend, an accountant or another advisor.
                    Note that only a summary will be shared (and not the full document). </p>
            </div>
            <div>
                <div> TRUSTED CONTACTS </div>
                <select
                    placeholder="Relationship to contact"
                    value={formData.relation} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })  //setting the formData to the value input of the textfield  
                    }
                >
                    <option>Spouse</option>
                    <option>Fiance</option>
                    <option>Life Partner</option>
                    <option>Child</option>
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Brother</option>
                    <option>Sister</option>
                    <option>Other Family</option>
                    <option>Other</option>
                </select>
                <input
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <select
                    placeholder="Relationship to contact"
                    value={formData.relation} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })  //setting the formData to the value input of the textfield  
                    }
                >
                    <option>Spouse</option>
                    <option>Fiance</option>
                    <option>Life Partner</option>
                    <option>Child</option>
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Brother</option>
                    <option>Sister</option>
                    <option>Other Family</option>
                    <option>Other</option>
                </select>
                <input
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <select
                    placeholder="Relationship to contact"
                    value={formData.relation} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })  //setting the formData to the value input of the textfield  
                    }
                >
                    <option>Spouse</option>
                    <option>Fiance</option>
                    <option>Life Partner</option>
                    <option>Child</option>
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Brother</option>
                    <option>Sister</option>
                    <option>Other Family</option>
                    <option>Other</option>
                </select>
                <input
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
            </div>
            
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

export default TheWill;