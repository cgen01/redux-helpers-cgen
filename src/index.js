function createAction(name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    ERROR: `${name}_ERROR`,
  }
}

export default {
  createAction,
}
