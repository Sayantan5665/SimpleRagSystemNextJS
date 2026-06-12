"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { Database, LucideLoader2, MoveUp, RefreshCcw } from "lucide-react"
import React, { useState } from 'react'

type Props = {}

const VectorDBPage = (props: Props) => {
    const [isUploading, setisUploading] = useState(true);

    return (
        <main className='flex flex-col items-center p-24'>
            <Card>
                <CardHeader>
                    <CardTitle>Update Knowladge Base</CardTitle>
                    <CardDescription>Add New documents to Vector DB</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 grid gap-4 border rounded-lg p-6">
                            <div className='gap-4 relative'>
                                <Button className='absolute -right-4 -top-4' variant={'ghost'} size={'icon'}>
                                    <RefreshCcw />
                                </Button>
                                <Label>Files List:</Label>
                                <Textarea readOnly
                                    className='min-h-24 resize-none border p-3 shadow-none disabled:cursor-default focus-visible:ring-0 text-sm text-muted-foreground'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="grid gap-2">
                                    <Label>
                                        Index Name
                                    </Label>
                                    <Input placeholder='index name' className='disabled:cursor-default' />
                                </div>
                                <div className="grid gap-2">
                                    <Label>
                                        Namespace
                                    </Label>
                                    <Input placeholder='namespace' className='disabled:cursor-default' />
                                </div>
                            </div>
                        </div>
                        <Button variant={'outline'} className='w-full h-full min-h-[150px] flex flex-col items-center justify-center gap-2'>
                            <div className='flex flex-row items-center justify-center relative'>
                                <Database className='!w-16 !h-16 stroke-[#D90013]' />
                                <MoveUp className='!w-8 !h-8 stroke-[#D90013] absolute -right-6' strokeWidth={3} />
                            </div>
                            {/* <span className='text-[#D90013] font-semibold mt-2'>Upload Data</span> */}
                        </Button>
                    </div>
                    {isUploading && <div className='mt-4'>
                        <Label>File Name: xxxxxx</Label>
                        <div className='flex flex-row items-center gap-4'>
                            <Progress value={20} />
                            <LucideLoader2 className='stroke-[#D90013] animate-spin' />
                        </div>
                    </div>}
                </CardContent>
            </Card>
        </main>
    )
}

export default VectorDBPage

