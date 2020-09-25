const schema = {
  properties: {
    body: {
      type: 'string',
      minLength: 1,
      pattern: '\=$'    // Ends with an '=' sign (base64 ends with '=')
    }
  },
  required: [
    'body'
  ]
};

export default schema;
