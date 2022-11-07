import React from 'react'

const AddTransaction = () => {
    return (
        /* form-wrapper */
        <div className="form-wrapper">
            {/* Add Income */}
            <form>
                {/* input-group income */}
                <div className="input-group income">
                    {/* Add Income */}
                    <input type="text" placeholder='Add Income...' autoComplete='off' />
                    {/* Amount */}
                    <input type="number" placeholder='Amount' autoComplete='off' />
                    {/* submit */}
                    <input type="submit" value="Submit" />
                </div>
            </form>
            {/* Add Expense */}
            <form>
                {/* input-group expense */}
                <div className="input-group expense">
                    {/* Add Expense */}
                    <input type="text" placeholder='Add Expense...' autoComplete='off' />
                    {/* Amount */}
                    <input type="number" placeholder='Amount' autoComplete='off' />
                    {/* submit */}
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
