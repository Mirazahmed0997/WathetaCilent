import * as yup from "yup";
import { PaymentMethod, CostingType } from "@prisma/client";

// ✅ Reusable Validation Rules
const nameValidation = yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters');

const descriptionValidation = yup
    .string()
    .nullable()
    .max(500, 'Description cannot exceed 500 characters')

const emailValidation = yup
    .string()
    .email('Invalid email format');

const passwordValidation = yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/,
        'Password must contain at least one letter and one number'
    );

const statusIdValidation = yup
    .string()
    .required('Status is required');

const phoneValidation = yup
    .string()
    .nullable()
    .matches(
        /^(?:\+?88)?01[3-9]\d{8}$/,
        'Invalid Bangladeshi phone number'
    );


// #############################
// #############################
// #############################


export const constantSchema = yup.object({
    name: nameValidation,
});

export const signupSchema = yup.object({
    name: nameValidation,
    email: emailValidation.required('Email is required'),
    password: passwordValidation,
    phone: phoneValidation,
    role: yup
        .string()
        .required('Role is required'),
});

export const loginSchema = yup.object({
    email: emailValidation.required('Email is required'),
    password: passwordValidation,
}).noUnknown(true, 'Unknown fields are not allowed');

export const changePasswordSchema = yup.object({
    oldPassword: passwordValidation,
    newPassword: passwordValidation.notOneOf(
        [yup.ref('oldPassword')],
        'New password cannot be the same as the old password'
    ),
    conPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf(
            [yup.ref('newPassword')],
            'Confirm password must match the new password'
        ),
}).noUnknown(true, 'Unknown fields are not allowed');

export const userUpdateSchema = yup.object({
    name: nameValidation,
    email: emailValidation.required('Email is required'),
    status: statusIdValidation,
    permissions: yup
        .array()
        .of(yup.string()),
    // .min(1, 'At least one permission is required'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const waiterTargetSchema = yup.object({
    targetOrder: yup.number().min(0, 'Target Order cannot be negative'),
    targetBill: yup.number().min(0, 'Target Bill cannot be negative'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const menuItemSchema = yup.object({
    name: nameValidation,
    description: descriptionValidation,
    categoryId: yup
        .string()
        .required('Menu category is required'),
    price: yup
        .number()
        .required('Price is required')
        .positive('Price must be a positive number')
        .min(0, 'Price cannot be negative'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const diningTableSchema = yup.object({
    name: nameValidation,
    description: descriptionValidation,
}).noUnknown(true, 'Unknown fields are not allowed');

export const orderSchema = yup.object({
    tableId: yup
        .string()
        .required('Table is required'),
    orderItems: yup
        .array()
        .of(
            yup.object({
                menuItemId: yup
                    .string()
                    .required('Menu item is required'),
                quantity: yup
                    .number()
                    .required('Quantity is required')
                    .positive('Quantity must be a positive number')
                    .min(1, 'Quantity must be at least 1'),
            })
        )
        .min(1, 'At least one menu item is required'),
    note: yup.string().max(500, 'Note cannot exceed 500 characters'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const billSchema = yup.object({
    customerId: yup
        .string()
        .required('Customer is required'),
    vatAmount: yup
        .number()
        .nullable()
        .positive('VAT Amount must be a positive number')
        .min(0, 'VAT Amount cannot be negative'),
    discount: yup
        .number()
        .nullable()
        .positive('Discount must be a positive number')
        .min(0, 'Discount cannot be negative'),
    billOrders: yup
        .array()
        .of(yup.string().required('Each order ID is required'))
        .min(1, 'At least one order ID is required'),
    note: yup.string().max(500, 'Note cannot exceed 500 characters'),
    paymentMethod: yup
        .mixed()
        .required('Payment Method is required')
        .oneOf(Object.values(PaymentMethod), 'Invalid payment method'),
    paymentAmount: yup
        .number()
        .required('Payment amount is required')
        .positive('Payment amount must be a positive number')
        .min(0, 'Payment amount cannot be negative'),
    paymentNote: yup.string().max(500, 'Payment Note cannot exceed 500 characters'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const paymentSchema = yup.object({
    method: yup
        .mixed()
        .required('Payment Method is required')
        .oneOf(Object.values(PaymentMethod), 'Invalid payment method'),
    amount: yup
        .number()
        .required('Payment amount is required')
        .positive('Payment amount must be a positive number')
        .min(0, 'Payment amount cannot be negative'),
    note: yup.string().max(500, 'Payment Note cannot exceed 500 characters'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const costingSchema = yup.object({
    type: yup
        .mixed()
        .required('Costing Type is required')
        .oneOf(Object.values(CostingType), 'Invalid costing type'),
    amount: yup
        .number()
        .required('Costing amount is required')
        .positive('Costing amount must be a positive number')
        .min(0, 'Costing amount cannot be negative'),
    description: yup.string().max(500, 'Costing Description cannot exceed 500 characters'),
}).noUnknown(true, 'Unknown fields are not allowed');

export const customerSchema = yup.object({
    name: nameValidation,
    phone: phoneValidation,
}).noUnknown(true, 'Unknown fields are not allowed');