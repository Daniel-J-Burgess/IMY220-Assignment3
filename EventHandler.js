class EventHandler
{
	constructor(inEvents)
	{
		this.events = inEvents;

	}

	getEventsBetweenDates( start, end)
	{
		return this.events.filter((event) => 
		{
			
			return event.dateStart>=start&&event.dateEnd<=end;
		});

	}

	getByMonth(month)
	{
		return this.events.filter((event) =>
		{
			var getMonth = event.dateStart.substring(5,7);
			return getMonth==month;
		});
	}

	getUniqueDateAndSort()
	{
		return events.sort(function(a, b) {
			return a.dateStart.localeCompare(b.dateStart);
		  }).reduce((returnArray, currentIterationEvent) =>
		{
			if(returnArray.every((event) => {return ((event.dateStart != currentIterationEvent.dateStart)||(event.dateEnd!=currentIterationEvent.dateEnd))})) returnArray.push(currentIterationEvent);
			return returnArray;

		}, []).sort(events.dateStart);

	}//end function

	getSummary(optional){
		var myReturnArray=[];
		if (optional!=null) {
			if (optional.constructor ===Array) {
				return optional.map((test)=>{
					if (test.dateStart==test.dateEnd) {
						return "On "+test.dateStart+":"+test.name+"("+test.description+")";
					}else{
						return "From "+test.dateStart+" to "+test.dateEnd+":"+test.name+"("+test.description+")";
					}
				})
			}else{
				if (optional.dateStart==optional.dateEnd) {
					return "On "+optional.dateStart+":"+optional.name+"("+optional.description+")";
				}else{
					"From "+optional.dateStart+" to "+optional.dateEnd+":"+	optional.name+"("+optional.description+")"
				}
			}			
		} else {
			return events.map((event)=>{
				if (event.dateStart==event.dateEnd) {
					return "On "+event.dateStart+":"+event.name+"("+event.description+")";
				}else{
					return "From "+event.dateStart+" to "+event.dateEnd+":"+event.name+"("+event.description+")";
				}
			})
		}
		return myReturnArray;
	}
}//end class

Array.prototype.getEventsBetweenDates=function(start, end){
	
	return this.filter((event) => 
	{
		
		return event.dateStart>=start&&event.dateStart<=end;
	});
}
Array.prototype.getByMonth=function(month){
	return this.filter((event) =>
	{
		var getMonth = event.dateStart.substring(5,7);
			
		return getMonth==month;
	});

};
Array.prototype.getUniqueDateAndSort=function(){
	return this.sort(function(a, b) {
		return a.dateStart.localeCompare(b.dateStart);
	  }).reduce((returnArray, currentIterationEvent) =>
	{
		if(returnArray.every((event) => {return ((event.dateStart != currentIterationEvent.dateStart)||(event.dateEnd!=currentIterationEvent.dateEnd))})) returnArray.push(currentIterationEvent);
		return returnArray;

	}, []).sort(events.dateStart);
};
Array.prototype.getSummary=function(){
		var optional =this;
		if (optional!=null) {
			if (optional.constructor ===Array) {
				return optional.map((test)=>{
					if (test.dateStart==test.dateEnd) {
						return "On "+test.dateStart+":"+test.name+"("+test.description+")";
					}else{
						return "From "+test.dateStart+" to "+test.dateEnd+":"+test.name+"("+test.description+")";
					}
				})
			}else{
				if (optional.dateStart==optional.dateEnd) {
					return "On "+optional.dateStart+":"+optional.name+"("+optional.description+")";
				}else{
					"From "+optional.dateStart+" to "+optional.dateEnd+":"+	optional.name+"("+optional.description+")"
				}
			}			
		} else {
			return events.map((event)=>{
				if (event.dateStart==event.dateEnd) {
					return "On "+event.dateStart+":"+event.name+"("+event.description+")";
				}else{
					return "From "+event.dateStart+" to "+event.dateEnd+":"+event.name+"("+event.description+")";
				}
			})
		}
		
	};