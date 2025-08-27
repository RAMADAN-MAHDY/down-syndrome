import { create } from "zustand";


const useSurveyStore = create(
 
    (set) => ({
      questions: [
        {
          id: "ageGroupId",
          question: "ما عمر الطفل؟",
          options: [],
        },
        {
          id: "problemTag",
          question: "ما التحدي الرئيسي الذي يواجهه الطفل؟",
          options: [
            "تأخر في الكلام",
            "فرط حركة",
            "صعوبات تعلم",
            "مشاكل حركية",
            "سلوكيات غير متزنة",
          ],
        },
        {
          id: "previousSupport",
          question: "هل حصل الطفل على دعم أو جلسات تأهيلية سابقًا؟",
          options: [
            "نعم، بشكل منتظم",
            "نعم، لكن بشكل متقطع",
            "لا",
            "لا أعلم",
          ],
        },
      ],
      currentIndex: 0,
      answers: {},
      submitted: false,

      setQuestions: (newQuestions) =>
        set({ questions: newQuestions }),

      handleAnswer: (answer) =>
        set((state) => {
          const currentQuestion = state.questions[state.currentIndex];
          const answerToStore = answer.id ? answer.id : answer;
          const updatedAnswers = {
            ...state.answers,
            [currentQuestion.id]: answerToStore,
          };

          if (state.currentIndex < state.questions.length - 1) {
            return {
              answers: updatedAnswers,
              currentIndex: state.currentIndex + 1,
            };
          } else {
            return { answers: updatedAnswers, submitted: true };
          }
        }),

      updateAnswer: (questionId, answerText) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: answerText,
          },
        })),

      resetSurvey: () =>
        set({
          currentIndex: 0,
          answers: {},
          submitted: false,
        }),
    }),
    {
      name: "survey-storage",
    }
  );

export default useSurveyStore;
