export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateMinAge = (birthday: string, minAge: number = 18): boolean => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (age < minAge) return false;
    if (age === minAge && monthDiff < 0) return false;
    if (age === minAge && monthDiff === 0 && dayDiff < 0) return false;

    return true;
};

export const validatePassword = (password: string, minLength: number = 6): boolean => {
    return password.length >= minLength;
};

export const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

export const formatBirthdayToISO = (dateString: string): string => {
    return new Date(dateString).toISOString();
};

