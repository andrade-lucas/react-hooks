const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Primeira segunda' },
            ]
        },
        {
            id: 2, title: 'Aprendendo redux', lessons: [
                { id: 3, title: 'Primeira terceira' },
                { id: 4, title: 'Primeira quarta' },
            ]
        }
    ]
};

export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        };
    }

    return state;
}
