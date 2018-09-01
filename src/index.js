import merge from 'deepmerge'

const deepCopy = obj => merge(obj, {})

function createAction(name) {
  return {
    LOADING: `${name}_LOADING`,
    COMPLETE: `${name}_COMPLETE`,
  }
}

function handleLoading(loadingState, {field, loading}) {
  const updateLoadingState = deepCopy(loadingState)
  updateLoadingState[field] = loading
  return updateLoadingState
}

export {createAction, deepCopy, handleLoading, merge}
