import { ExternalLink, BookOpen, Tag } from 'lucide-react';
import { useState } from 'react';

import { DefaultAllSelectKey } from '@/entities/educations/constant';
import { useFetchEducations } from '@/entities/educations/hook/useFetchEducations';
import { useFetchEducationTypes } from '@/entities/educations/hook/useFetchEducationTypes';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

export default function EducationPage() {
  const [selectedTopic, setSelectedTopic] = useState(DefaultAllSelectKey);
  const { data: topics = [] } = useFetchEducationTypes();
  const { data: filteredData = [] } = useFetchEducations(selectedTopic);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 md:p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">체육 교육 자료</h1>
          <p className="text-blue-100">
            체육과 건강에 관련된 다양한 교육 자료를 제공합니다. 건강한 생활과 안전한 스포츠 활동에
            도움이 되는 정보를 확인하세요.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-500 mb-1 block">주제별 필터링</label>
            <Select value={selectedTopic} onValueChange={(value) => setSelectedTopic(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="모든 주제" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 주제</SelectItem>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-shrink-0 self-end">
            <Button
              variant="outline"
              onClick={() => setSelectedTopic(DefaultAllSelectKey)}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              필터 초기화
            </Button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        총 <span className="font-medium text-blue-600">{filteredData.length}</span>개의 교육 자료가
        있습니다.
        {selectedTopic && (
          <span>
            {' '}
            <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
              {selectedTopic}
            </Badge>
          </span>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="h-full transition-all group-hover:shadow-md border-blue-100 overflow-hidden flex flex-col pt-0">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2"></div>
              <CardHeader className="pb-2 flex-shrink-0">
                <div className="flex justify-between items-start">
                  <div>
                    <CardDescription className="text-blue-600 line-clamp-1">
                      {item.subtitle}
                    </CardDescription>
                    <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3rem]">
                      {item.title}
                    </CardTitle>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <div className="flex items-start gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{item.topic}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Tag className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-500 line-clamp-2">{item.keywords.join(', ')}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto flex-shrink-0">
                <div className="w-full text-right">
                  <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                    {item.subject}
                  </Badge>
                </div>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>

      {/* 결과가 없을 때 */}
      {filteredData.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <BookOpen className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">교육 자료가 없습니다</h3>
          <p className="text-gray-500 mb-4">다른 주제를 선택하거나 필터를 초기화해 보세요.</p>
          <Button onClick={() => setSelectedTopic(DefaultAllSelectKey)}>필터 초기화</Button>
        </div>
      )}
    </div>
  );
}
