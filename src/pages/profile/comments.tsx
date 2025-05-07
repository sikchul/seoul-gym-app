import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

import type { NextPageWithLayout } from '@/apps/app-provider';
import { useFetchUserComments } from '@/entities/facilities/hook';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { ProfileLayout } from '@/widgets/layout/profile-layout';
import { RootLayout } from '@/widgets/layout/root-layout';

const CommentsPage: NextPageWithLayout = () => {
  const { data: comments = [] } = useFetchUserComments();

  return (
    <Card>
      <CardHeader>
        <CardTitle>내가 작성한 댓글</CardTitle>
        <CardDescription>내가 작성한 댓글 목록입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.comment_id}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/facility/${comment.ft_idx}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {comment.facilities.ft_title}
                    </Link>
                    <div className="text-xs text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="mt-1">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-3" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">작성한 댓글이 없습니다</h3>
            <p className="text-gray-500">체육시설에 댓글을 남겨보세요.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

CommentsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};

export default CommentsPage;
