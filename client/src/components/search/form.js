import React from "react";

const Form = (props) =>

			<div className="panel panel-primary" >
				<div className="panel-heading" style={{background:"pink"}}>
					<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
				</div>
				<div className="panel-body">

					<form>

					  <div className="form-group">
					  	<label htmlFor="input-box">
            				Search Term:
          				</label>
					    <input 
					    type="text" className="form-control" id="searchTerm" 
					    placeholder="Search Term:" 
					    value={props.searchTerm}
					    onChange={props.handleInputChange}
					    />
					  </div>

					  <div className="form-group">
						
						<label htmlFor="input-box">
            				Number of Records to Retrieve:
          				</label>

						<select className="form-control" id="numRecordsSelect" 
						placeholder="Number of Records to Retrieve:"
						onChange={props.handleInputChange}
						>
							<option value="1">1</option>
							<option value="5" selected>5</option>
							<option value="10">10</option>
						</select>			  
					  </div>

					  <div className="form-group">
						<label htmlFor="input-box">
            				Start Year (Optional):
          				</label>

					    <input type="text" className="form-control" id="startYear" 
					    placeholder="YYYYMMDD"
					    value={props.startYear}
					    onChange={props.handleInputChange}
					    />
					  </div>

					  <div className="form-group">
					  	<label htmlFor="input-box">
            				End Year (Optional):
          				</label>

					    <input type="text" className="form-control" id="endYear" 
					    placeholder="YYYYMMDD" 
					    value={props.endYear}
					    onChange={props.handleInputChange}
					    />
					  </div>

					  <button type="submit" className="btn btn-default button" id="runSearch"
						onClick={props.handleOnSubmit}
					  >
					  <i className="fa fa-search"></i> Search</button>
  					  <button type="button" className="btn btn-default button" onClick={props.handleOnClearResults}
  					  id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

					</form>
				</div>
			</div>;

export default Form;