function formData(currentValues, initialValues, parentKey = '') {
    const formData = new FormData();

    const isObject = (val) =>
        val && typeof val === 'object' && !(val instanceof File) && !Array.isArray(val);

    const appendChangedFields = (curr, init, parentKey) => {
        Object.keys(curr).forEach((key) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const currentValue = curr[key];
            const initialValue = init?.[key];

            // 🔁 Handle image array specifically
            if (key === 'image' && Array.isArray(currentValue)) {
                const hasChanged =
                    !Array.isArray(initialValue) ||
                    currentValue.length !== initialValue.length ||
                    currentValue.toString() !== initialValue.toString();

                if (hasChanged) {
                    currentValue.forEach((file) => {
                        formData.append('image', file); // ⚠️ Keep key same (e.g., 'image') if backend expects image[]
                    });
                }
            }
            // ✅ Handle any other array
            else if (Array.isArray(currentValue)) {
                const hasChanged =
                    !Array.isArray(initialValue) ||
                    currentValue.toString() !== initialValue.toString();
                if (hasChanged) {
                    currentValue.forEach((item, index) => {
                        formData.append(`${fullKey}[${index}]`, item);
                    });
                }
            }

            // 🧱 Handle nested objects
            else if (isObject(currentValue)) {
                appendChangedFields(currentValue, initialValue || {}, fullKey);
            }

            // 🧍 Handle single file or primitive value
            else if (
                currentValue !== undefined &&
                currentValue !== null &&
                currentValue !== '' &&
                currentValue !== initialValue
            ) {
                formData.append(fullKey, currentValue);
            }
        });
    };

    appendChangedFields(currentValues, initialValues, parentKey);

    return formData;
}

function jsonData(currentValues, initialValues, parentKey = '') {
    const changedData = {};

    const isObject = (val) =>
        val && typeof val === 'object' && !Array.isArray(val);

    const appendChangedFields = (curr, init, parentKey) => {
        Object.keys(curr).forEach((key) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const currentValue = curr[key];
            const initialValue = init?.[key];

            if (Array.isArray(currentValue)) {
                const hasChanged = !Array.isArray(initialValue) || currentValue.toString() !== initialValue.toString();
                if (hasChanged) {
                    changedData[fullKey] = currentValue;
                }
            } else if (isObject(currentValue)) {
                appendChangedFields(currentValue, initialValue || {}, fullKey);
            } else if (
                currentValue !== undefined &&
                currentValue !== null &&
                currentValue !== '' &&
                currentValue !== initialValue
            ) {
                changedData[fullKey] = currentValue;
            }
        });
    };

    appendChangedFields(currentValues, initialValues, parentKey);

    return changedData;
}

const getChangedValue = {
    formData,
    jsonData,
}

export default getChangedValue;
