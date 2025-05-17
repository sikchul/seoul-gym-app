import DOMPurify from 'dompurify';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { useAuth } from '@/apps/auth-provider';
import { useDeleteFacilityComment } from '@/entities/facilities/hook/useDeleteFacilityComment';
import { useFetchFacilityComments } from '@/entities/facilities/hook/useFetchFacilityComments';
import { useMutateFacilityComment } from '@/entities/facilities/hook/useMutateFacilityComment';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/shared/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';

interface FacilityDetailCommentSectionProps {
  facilityId?: number;
}

export function FacilityDetailCommentSection({ facilityId }: FacilityDetailCommentSectionProps) {
  const { isAuthenticated, user } = useAuth();
  const { data: comments = [] } = useFetchFacilityComments({
    ft_idx: Number(facilityId)
  });
  const { mutate: createFacilityComment, isPending: isCreateCommentLoading } =
    useMutateFacilityComment();
  const { mutate: deleteFacilityComment, isPending: isDeleteCommentLoading } =
    useDeleteFacilityComment();
  const [newComment, setNewComment] = useState('');
  const [deleteCommentId, setDeleteCommentId] = useState<number | null>(null);

  const handleAddComment = () => {
    if (newComment.length > 1000) {
      toast.error('댓글은 1000자를 초과할 수 없습니다.');
      return;
    }

    if (!newComment.trim()) {
      toast.error('댓글 내용을 입력해주세요.');
      return;
    }

    const sanitizedComment = newComment.replace(/[<>]/g, '');

    createFacilityComment({
      ft_idx: Number(facilityId),
      comment: sanitizedComment,
      userId: String(user?.profile_id)
    });
    setNewComment('');
  };

  const handleDeleteComment = (commentId: number) => {
    const comment = comments.find((c) => c.comment_id === commentId);

    if (!comment?.is_my_comment) {
      toast.error('삭제 권한이 없습니다.');
      return;
    }

    deleteFacilityComment({
      commentId,
      ft_idx: Number(facilityId)
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          댓글
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
            {comments.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isAuthenticated && (
          <div className="flex gap-2">
            <Input
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1"
            />
            <Button disabled={isCreateCommentLoading} onClick={handleAddComment}>
              등록
            </Button>
          </div>
        )}
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.comment_id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.avatar || '/placeholder.svg'} alt={comment.nickname} />
                  <AvatarFallback>{comment.nickname.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{comment.nickname}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{DOMPurify.sanitize(comment.comment)}</p>
                </div>
                {comment.is_my_comment && (
                  <AlertDialog
                    open={deleteCommentId === comment.comment_id}
                    onOpenChange={(open) => !open && setDeleteCommentId(null)}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        disabled={isDeleteCommentLoading}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-red-500"
                        onClick={() => setDeleteCommentId(comment.comment_id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">댓글 삭제</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>댓글 삭제</AlertDialogTitle>
                        <AlertDialogDescription>
                          이 댓글을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>취소</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteComment(comment.comment_id)}
                          className="bg-red-500 hover:bg-red-600"
                        >
                          삭제
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>아직 댓글이 없습니다. 첫 댓글을 작성해보세요!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
