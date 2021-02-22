export function checkFormikValid(formik, parentField, field, index) {
  if (
    Array.isArray(formik.touched[parentField]) &&
    Array.isArray(formik.errors[parentField]) &&
    formik.touched[parentField][index] &&
    formik.errors[parentField][index]
  ) {
    return (
      formik.touched[parentField][index][field] &&
      !formik.errors[parentField][index][field]
    );
  }
}

export function checkFormikInValid(formik, parentField, field, index) {
  if (
    Array.isArray(formik.touched[parentField]) &&
    Array.isArray(formik.errors[parentField]) &&
    formik.touched[parentField][index] &&
    formik.errors[parentField][index]
  ) {
    return (
      formik.touched[parentField][index][field] &&
      formik.errors[parentField][index][field]
    );
  }
}
