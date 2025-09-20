/**
 * Adds a new empty string to a Formik array field
 * @param {FormikHelpers} formik - the formik instance
 * @param {string} fieldName - name of the array field (e.g. 'emails')
 * @param {any} emptyValue - value to insert (default: '')
 */
export const addToFieldArray = (formik, fieldName, emptyValue = '') => {
  const currentArray = formik.values[fieldName] || [];
  formik.setFieldValue(fieldName, [...currentArray, emptyValue]);
};

/**
 * Removes item from Formik array field by index
 * @param {FormikHelpers} formik - the formik instance
 * @param {string} fieldName - name of the array field (e.g. 'emails')
 * @param {number} index - index to remove
 */
export const removeFromFieldArray = (formik, fieldName, index) => {
  const currentArray = formik.values[fieldName] || [];
  const updatedArray = currentArray.filter((_, i) => i !== index);
  formik.setFieldValue(fieldName, updatedArray);
};

export const handleCheckboxChange = (formik, fieldName) => (checked) => {
    formik.setFieldValue(fieldName, checked);
};

// Handles selecting/deselecting checkboxes for Formik array fields
export const handleGroupCheckboxChange = (formik, fieldName) => (id) => {
    const selectedItems = formik.values[fieldName];
    if (selectedItems.includes(id)) {
        // If the item is already selected, remove it
        formik.setFieldValue(
            fieldName,
            selectedItems.filter((item) => item !== id)
        );
    } else {
        // If the item is not selected, add it
        formik.setFieldValue(fieldName, [...selectedItems, id]);
    }
};

// Recursive function to get all descendant IDs
const getAllDescendantIds = (node) => {
    const ids = [node.id];
    if (node.children?.length) {
        for (const child of node.children) {
            ids.push(...getAllDescendantIds(child));
        }
    }
    return ids;
};

// Recursive function to get all ancestor IDs (optional logic)
const getAllAncestorIds = (id, tree, map = {}, ancestors = []) => {
    if (!Object.keys(map).length) {
        for (const node of tree) {
            map[node.id] = { ...node, children: [] };
            if (node.children?.length) {
                for (const child of node.children) {
                    map[child.id] = { ...child, parentId: node.id };
                    if (child.children?.length) {
                        child.children.forEach(grandchild => {
                            map[grandchild.id] = { ...grandchild, parentId: child.id };
                        });
                    }
                }
            }
        }
    }

    const parentId = map[id]?.parentId;
    if (parentId) {
        ancestors.push(parentId);
        return getAllAncestorIds(parentId, tree, map, ancestors);
    }

    return ancestors;
};


export const handleTreeCheckboxChange = (formik, fieldName = 'permissions') => (id, children = [], tree = []) => {
    const selected = new Set(formik.values[fieldName]);
    const isSelected = selected.has(id);

    if (isSelected) {
        // Uncheck node + all children
        selected.delete(id);
        children.forEach(child => {
            getAllDescendantIds(child).forEach(descId => selected.delete(descId));
        });
    } else {
        // Select node
        selected.add(id);

        // Select all descendants
        children.forEach(child => {
            getAllDescendantIds(child).forEach(descId => selected.add(descId));
        });

        // **Remove ancestor selection logic** so parents are not auto-selected
        // const ancestors = getAllAncestorIds(id, tree);
        // ancestors.forEach(ancestorId => selected.add(ancestorId));
    }

    formik.setFieldValue(fieldName, [...selected]);
};

export const handleImageChange = (formik, fieldName) => (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
        formik.setFieldValue(fieldName, file); // Sets the file in Formik state
    }
};

export const clearField = (formik, fieldName) => {
    formik.setFieldValue(fieldName, null); // Resets the image field to null
};

// Common function for handling add and remove operations in Formik array fields
export const handleArrayFieldChange = (
    formik,
    actionType,
    fieldName,
    index = null
) => {
    const fieldArray = formik.values[fieldName];
    if (actionType === 'add') {
        formik.setFieldValue(fieldName, [...fieldArray, '']);
    } else if (actionType === 'remove' && index !== null) {
        const updatedArray = fieldArray.filter((_, i) => i !== index);
        formik.setFieldValue(fieldName, updatedArray);
    }
};