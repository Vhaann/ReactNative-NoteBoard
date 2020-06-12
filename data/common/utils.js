export const measureRef = ref => {
    return new Promise(resolve => {
        ref.current.measure((fx, fy, width, height) => {
            resolve({ width, height });
        });
    });
};
