export const baseURL = 'https://movienew.cybersoft.edu.vn/api/';
export const user = '';
export const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E';
export const tokenAccess =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGFvYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJiYWJ5bG9uZUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImJhYnlsb25lQGdtYWlsLmNvbSIsIkdQMDEiXSwibmJmIjoxNjQwNzY1OTk1LCJleHAiOjE2NDA3Njk1OTV9.OWUm0Ltf6UamAYd1uABVQ7c0gfmmuZxWog_3wx3Pd-I';

export const options = [
    { value: 'KhachHang', label: 'Khách Hàng' },
    { value: 'QuanTri', label: 'Quản Trị' },
];

export const columns = [
    { id: 'taiKhoan', label: 'Tài Khoản', minWidth: 170 },
    { id: 'hoTen', label: 'Họ Tên', minWidth: 100 },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'soDt',
        label: 'SĐT',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'matKhau',
        label: 'Mật Khẩu',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'maLoaiNguoiDung',
        label: 'Loại',
        minWidth: 170,
        align: 'right',
    },
];
