'use client';

import axios from 'axios';
import MuxPlayer from '@mux/mux-player-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Loader2, Lock } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useConfettiStore } from '@/hooks/use-confetti-store';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    videoUrl: string;
    playbackId: string;
    courseId: string;
    chapterId: string;
    nextChapterId?: string;
    isLocked: boolean;
    completeOnEnd: boolean;
    title: string;
}

export const VideoPlayer = ({
    videoUrl,
    playbackId,
    courseId,
    chapterId,
    nextChapterId,
    isLocked,
    completeOnEnd,
    title,
}: VideoPlayerProps) => {
    const [isReady, setIsReady] = useState(false);
    const [client, setClient] = useState(false);
    // const videoRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        setClient(true);
    }, []);

    return (
        <div className="relative aspect-video">
            {!isReady && !isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                    <Loader2 className="h-8 w-8 animate-spin text-secondary" />
                </div>
            )}
            {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
                    <Lock className="h-8 w-8" />
                    <p className="text-sm">This chapter is locked</p>
                </div>
            )}
            {!isLocked && client && (
                <ReactPlayer
                    width={'100%'}
                    height={'100%'}
                    // ref={videoRef}
                    url={videoUrl}
                    // url={'https://www.youtube.com/watch?v=sJt_i0hOugA&list=RDeA5S7E9nmLA&index=5'}
                    // className={cn(!isReady && 'hidden')}
                    controls
                    onReady={() => setIsReady(true)}
                    onEnded={() => {}}
                />
                // <MuxPlayer
                //     title={title}
                //     className={cn(!isReady && 'hidden')}
                //     onCanPlay={() => setIsReady(true)}
                //     onEnded={() => {}}
                //     autoPlay
                //     playbackId={playbackId}
                // />
            )}
        </div>
    );
};
