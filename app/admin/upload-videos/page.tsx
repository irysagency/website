'use client'

import { useState, useRef } from 'react'
import type { PutBlobResult } from '@vercel/blob'
import { Upload, Check, Copy, Loader2, Video } from 'lucide-react'

export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [blobs, setBlobs] = useState<PutBlobResult[]>([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    
    setUploading(true)
    const files = Array.from(event.target.files)
    
    for (const file of files) {
      try {
        const response = await fetch(
          `/api/upload?filename=${file.name}`,
          {
            method: 'POST',
            body: file,
          },
        )
        const newBlob = (await response.json()) as PutBlobResult
        setBlobs((prev) => [...prev, newBlob])
      } catch (error) {
        console.error('Error uploading:', error)
      }
    }
    setUploading(false)
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
            Irys Video Uploader
          </h1>
          <p className="text-white/60 mt-2">Charge tes clips de 15s pour le portfolio direct sur Vercel Blob.</p>
        </header>

        <section className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <input
            type="file"
            ref={inputFileRef}
            onChange={handleUpload}
            multiple
            accept="video/mp4"
            className="hidden"
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_40px_rgba(238,29,82,0.2)]">
              {uploading ? <Loader2 className="w-10 h-10 animate-spin" /> : <Upload className="w-10 h-10" />}
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {uploading ? 'Téléchargement en cours...' : 'Sélectionne tes vidéos'}
              </h2>
              <p className="text-white/40 max-w-sm mx-auto">
                Extensions acceptées : .mp4. Poids recommandé : &lt; 2 Mo par vidéo.
              </p>
            </div>

            <button
              onClick={() => inputFileRef.current?.click()}
              disabled={uploading}
              className="mt-4 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50"
            >
              Parcourir mes fichiers
            </button>
          </div>
        </section>

        {/* Results List */}
        {blobs.length > 0 && (
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Check className="text-green-500" /> Vidéos prêtes ({blobs.length})
            </h3>
            
            <div className="grid gap-4">
              {blobs.map((blob) => (
                <div 
                  key={blob.url}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white truncate max-w-[250px]">{blob.pathname}</p>
                      <p className="text-[10px] text-white/40 truncate max-w-[300px]">{blob.url}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(blob.url)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                    title="Copier l'URL"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl text-accent text-sm">
              <p className="font-bold mb-2">C'est fini ! 🚀</p>
              <p>Copie ces URLs et envoie-les moi pour que je mette à jour ton portfolio.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
