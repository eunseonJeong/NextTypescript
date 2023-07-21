// import axios from 'axios';
// import { keys } from '../interfaces/keys';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// const usePost = () => {
//   const queryClient = useQueryClient();

//   const { data, status, isError } = useQuery({
//     queryKey: [keys.GET_POST],
//     queryFn: async () => {
//       const data = await axios.get('http://localhost:3000/api/main');
//       console.log('usePostData:', data);
//       return data;
//     },
//   });

//   console.log('data:', data);

//   const { mutate: restrictShare } = useMutation({
//     mutationFn: async () => {
//       await axios.patch(`/api/main`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [keys.GET_POST] });
//     },
//   });

//   const { mutate: onReportDelete } = useMutation({
//     mutationFn: async (payload: number) => {
//       await axios.delete(`/api/main/${payload}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [keys.GET_POST] });
//     },
//   });

//   return {
//     postData: data,
//     restrictShare,
//     onReportDelete,
//     status,
//     isError,
//   };
// };

// export default usePost;
