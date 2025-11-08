import React, { useEffect, useState } from 'react'

const Footer: React.FC = () => {
  const [commitHash, setCommitHash] = useState<string | null>(null)

  useEffect(() => {
    fetch('/commit-hash.txt')
      .then((res) => res.ok ? res.text() : null)
      .then((text) => setCommitHash(text ? text.trim() : null))
      .catch(() => setCommitHash(null))
  }, [])

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center">
          &copy; Copyright <strong><span>Arun</span></strong>. All Rights Reserved
        </div>
        {commitHash && (
          <div className="text-center" style={{ fontSize: '0.8em', color: '#888' }}>
            Deployed commit: <code>{commitHash}</code>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
