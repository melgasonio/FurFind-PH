export const petReportsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PETREPORTS':
            return {
                petReports: action.payload
            }
        case 'CREATE_PETREPORT':
            return {
                petReports: [action.payload, ...state.petReports]
            }
        case 'UPDATE_PETREPORT':
            return {
                petReports: [action.payload, ...state.petReports]
            }
        case 'DELETE_PETREPORT':
            return {
                petReports: state.petReports.filter((p) => p._id !== action.payload._id)
            }
        default:
            return state
    }
}