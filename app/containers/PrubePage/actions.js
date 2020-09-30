export const SHOW_USERS = 'SHOW_USERS'


export function showUsers() {
    const users = [
        {_id: "5f024576be48640017da7f8f",
        tema: "Quesos",
        description: "Algo dequesos",
        status: 1,
        user_id: "QwGMnWsTjJeCJuCCl7pDvw1w8og2"},
        {_id: "5f024576be48640017da7f8",
        tema: "Quesos",
        description: "Algo dequesos",
        status: 1,
        user_id: "QwGMnWsTjJeCJuCCl7pDvw1w8og2"}
    ]

    return {
        type: SHOW_USERS,
        payload:users
    }
}
