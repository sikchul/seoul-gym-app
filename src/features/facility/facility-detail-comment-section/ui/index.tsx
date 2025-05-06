import { Trash2 } from 'lucide-react';
import { useState } from 'react';

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

interface Comment {
  id: number;
  user: string;
  text: string;
  isMyComment: boolean;
  createdAt: string;
  userAvatar?: string;
}

interface FacilityDetailCommentSectionProps {
  facilityId?: number;
  initialComments: Comment[];
}

export function FacilityDetailCommentSection({
  initialComments
}: FacilityDetailCommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [deleteCommentId, setDeleteCommentId] = useState<number | null>(null);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        user: '사용자',
        text: newComment,
        isMyComment: true,
        createdAt: new Date().toISOString(),
        userAvatar: '/placeholder.svg?height=40&width=40'
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
    setDeleteCommentId(null);
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
        <div className="flex gap-2">
          <Input
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleAddComment}>등록</Button>
        </div>

        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.userAvatar || '/placeholder.svg'} alt={comment.user} />
                  <AvatarFallback>{comment.user.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{comment.user}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{comment.text}</p>
                </div>
                {comment.isMyComment && (
                  <AlertDialog
                    open={deleteCommentId === comment.id}
                    onOpenChange={(open) => !open && setDeleteCommentId(null)}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-red-500"
                        onClick={() => setDeleteCommentId(comment.id)}
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
                          onClick={() => handleDeleteComment(comment.id)}
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
