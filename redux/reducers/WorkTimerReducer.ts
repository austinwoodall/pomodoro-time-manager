const workTimerReducer = (state = 25, action: any) => {
	switch (action.payload) {
		case 'INCREMENT_TIME':
			return state;
	}
};

export default workTimerReducer;
